using System.Threading;
using System.Threading.Tasks;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
