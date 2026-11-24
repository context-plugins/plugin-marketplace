using System.Threading;
using System.Threading.Tasks;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
