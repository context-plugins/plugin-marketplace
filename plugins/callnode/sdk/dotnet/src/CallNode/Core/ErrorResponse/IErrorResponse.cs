using System.Threading;
using System.Threading.Tasks;
using CallNode.Core.Models;

namespace CallNode.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
