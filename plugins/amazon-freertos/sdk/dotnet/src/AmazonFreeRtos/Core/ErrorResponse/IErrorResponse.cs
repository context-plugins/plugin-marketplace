using System.Threading;
using System.Threading.Tasks;
using AmazonFreeRtos.Core.Models;

namespace AmazonFreeRtos.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
