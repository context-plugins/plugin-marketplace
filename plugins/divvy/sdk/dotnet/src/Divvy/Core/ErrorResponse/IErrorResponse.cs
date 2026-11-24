using System.Threading;
using System.Threading.Tasks;
using Divvy.Core.Models;

namespace Divvy.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
