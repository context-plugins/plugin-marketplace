using System.Threading;
using System.Threading.Tasks;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
