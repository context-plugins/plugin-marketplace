using System.Threading;
using System.Threading.Tasks;
using BetterStack.Core.Models;

namespace BetterStack.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
