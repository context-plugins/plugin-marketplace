using System.Threading;
using System.Threading.Tasks;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
