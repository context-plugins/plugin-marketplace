using System.Threading;
using System.Threading.Tasks;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
