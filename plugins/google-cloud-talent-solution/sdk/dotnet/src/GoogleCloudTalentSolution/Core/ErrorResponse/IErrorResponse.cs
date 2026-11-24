using System.Threading;
using System.Threading.Tasks;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
