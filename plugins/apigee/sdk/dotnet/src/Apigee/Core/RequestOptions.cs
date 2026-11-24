using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Apigee.Core.Hooks;
using Apigee.Core.Models;

namespace Apigee.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
