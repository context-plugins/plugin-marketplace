using System.Threading;
using System.Threading.Tasks;
using AwsXRay.Core.Models;

namespace AwsXRay.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
