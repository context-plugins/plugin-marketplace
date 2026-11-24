using System.Threading;
using System.Threading.Tasks;
using AmazonEbs.Core.Models;

namespace AmazonEbs.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
