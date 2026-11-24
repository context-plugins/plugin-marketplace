using System.Threading;
using System.Threading.Tasks;
using Buildkite.Core.ErrorResponse;
using Buildkite.Core.Models;

namespace Buildkite.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
