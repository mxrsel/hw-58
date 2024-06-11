import React from 'react';

interface Props extends React.PropsWithChildren{
    type: 'primary' | 'success' | 'info' | 'warning' | 'danger'
    onDismiss: () => void;
}

const AlertFunction: React.FC<Props> = ({type, onDismiss, children}) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {children}
            {onDismiss && (
                <button type="button" className=" btn-close"  onClick={onDismiss}>Close</button>
            )}
        </div>
    );
};

export default AlertFunction;