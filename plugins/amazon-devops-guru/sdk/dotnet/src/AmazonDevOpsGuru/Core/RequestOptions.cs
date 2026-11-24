using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AmazonDevOpsGuru.Core.Hooks;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
