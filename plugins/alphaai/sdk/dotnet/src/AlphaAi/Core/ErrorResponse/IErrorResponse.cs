using System.Threading;
using System.Threading.Tasks;
using AlphaAi.Core.Models;

namespace AlphaAi.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
