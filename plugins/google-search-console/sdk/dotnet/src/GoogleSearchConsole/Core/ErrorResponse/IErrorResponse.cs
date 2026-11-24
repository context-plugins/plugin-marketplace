using System.Threading;
using System.Threading.Tasks;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
