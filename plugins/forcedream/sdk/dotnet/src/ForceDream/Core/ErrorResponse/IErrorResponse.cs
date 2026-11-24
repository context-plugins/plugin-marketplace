using System.Threading;
using System.Threading.Tasks;
using ForceDream.Core.Models;

namespace ForceDream.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
