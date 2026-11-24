using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AmazonVpc.Core.Hooks;
using AmazonVpc.Core.Models;

namespace AmazonVpc.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
