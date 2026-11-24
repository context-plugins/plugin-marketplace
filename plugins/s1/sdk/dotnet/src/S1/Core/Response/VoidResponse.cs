using System.Threading;
using System.Threading.Tasks;
using S1.Core.Models;

namespace S1.Core.Response;

public sealed class VoidResponse : IResponse<VoidResponse>
{
    public static VoidResponse Instance { get; } = new();

    private VoidResponse() { }

    ValueTask<VoidResponse> IResponse<VoidResponse>.Map(ResponseContext context, CancellationToken cancellationToken)
    {
        // No body to read, but this response still owns the HttpResponseMessage and disposes it.
        context.Response.Dispose();
        return new ValueTask<VoidResponse>(Instance);
    }
}
