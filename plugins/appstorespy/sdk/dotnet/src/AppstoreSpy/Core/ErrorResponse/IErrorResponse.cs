using System.Threading;
using System.Threading.Tasks;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
