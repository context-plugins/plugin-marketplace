using System.Threading;
using System.Threading.Tasks;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
