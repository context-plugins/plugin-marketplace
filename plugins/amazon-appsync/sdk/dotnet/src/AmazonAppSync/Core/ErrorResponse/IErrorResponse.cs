using System.Threading;
using System.Threading.Tasks;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
