using System.Threading;
using System.Threading.Tasks;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
