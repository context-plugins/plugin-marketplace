using System.Threading;
using System.Threading.Tasks;
using Upstox.Core.Models;

namespace Upstox.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
