using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using SalesforceServiceCloud.Core.Hooks;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
