using System.Threading;
using System.Threading.Tasks;
using PrismaReviews.Core.ErrorResponse;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Core.Response;

internal sealed class RawErrorBodyResponse : IResponse<RawError>
{
    public static RawErrorBodyResponse Instance { get; } = new();

    private RawErrorBodyResponse() { }

    public ValueTask<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        new(RawError.Create(context.Response, cancellationToken));
}
