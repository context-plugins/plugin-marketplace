using System.Threading;
using System.Threading.Tasks;
using S1.Core.Models;

namespace S1.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
