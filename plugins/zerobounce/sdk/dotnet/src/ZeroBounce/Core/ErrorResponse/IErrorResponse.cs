using System.Threading;
using System.Threading.Tasks;
using ZeroBounce.Core.Models;

namespace ZeroBounce.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
