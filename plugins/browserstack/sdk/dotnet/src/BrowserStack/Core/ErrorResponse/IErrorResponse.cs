using System.Threading;
using System.Threading.Tasks;
using BrowserStack.Core.Models;

namespace BrowserStack.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
