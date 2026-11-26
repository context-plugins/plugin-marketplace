using System.Threading;
using System.Threading.Tasks;
using AlphAi.Core.Models;

namespace AlphAi.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
