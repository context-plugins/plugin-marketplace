using System.Threading;
using System.Threading.Tasks;
using CircleCi.Core.Models;

namespace CircleCi.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
