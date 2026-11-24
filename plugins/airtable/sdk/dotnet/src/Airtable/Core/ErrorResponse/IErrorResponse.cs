using System.Threading;
using System.Threading.Tasks;
using Airtable.Core.Models;

namespace Airtable.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
