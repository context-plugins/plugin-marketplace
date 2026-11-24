using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core.Models;

namespace Hightouch.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
