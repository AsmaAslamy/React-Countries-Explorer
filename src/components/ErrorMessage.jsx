function ErrorMessage({ error, retry }) {
    return (
        <div>
            <p>Error: {error}</p>
            <button onClick={retry}>Retry</button>
        </div>
    );
}

export default ErrorMessage;
