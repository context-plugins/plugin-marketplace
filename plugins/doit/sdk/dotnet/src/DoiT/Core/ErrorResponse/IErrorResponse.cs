using System.Threading;
using System.Threading.Tasks;
using DoiT.Core.Models;

namespace DoiT.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
