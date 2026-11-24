using System.Threading;
using System.Threading.Tasks;
using ParallelSdk.Core.ErrorResponse;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
