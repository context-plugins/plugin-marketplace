using System.Threading;
using System.Threading.Tasks;
using GoogleCloudApiGateway.Core.Models;

namespace GoogleCloudApiGateway.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
