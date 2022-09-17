const Loading = () => (
    <div
        className="ui segment"
        style={{
        width: "auto",
        height: "250px"
    }}>
        <div className="ui active dimmer">
            <div className="ui large text loader">Loading Data...</div>
        </div>
    </div>
);

export default Loading;
