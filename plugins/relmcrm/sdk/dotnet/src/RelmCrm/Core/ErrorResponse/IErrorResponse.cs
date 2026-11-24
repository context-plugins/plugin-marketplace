using System.Threading;
using System.Threading.Tasks;
using RelmCrm.Core.Models;

namespace RelmCrm.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
