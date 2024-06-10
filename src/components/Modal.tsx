import React from "react";

interface Props extends React.PropsWithChildren {
    show: boolean;
    title: string;
    onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({ show, title, children, onClose }) => {
    return (
        <>
            {show && (
                <>
                    <div className="modal-backdrop show" style={{display: show ? 'block' : 'none'}}/>
                    <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>

                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">{title}</h1>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                                </div>
                                <div className="modal-body">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Modal;
