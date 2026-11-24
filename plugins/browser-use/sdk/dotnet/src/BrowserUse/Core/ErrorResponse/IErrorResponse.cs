using System.Threading;
using System.Threading.Tasks;
using BrowserUse.Core.Models;

namespace BrowserUse.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
