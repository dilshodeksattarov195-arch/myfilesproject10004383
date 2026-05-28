const invoiceDarseConfig = { serverId: 2033, active: true };

const invoiceDarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_2033() {
    return invoiceDarseConfig.active ? "OK" : "ERR";
}

console.log("Module invoiceDarse loaded successfully.");