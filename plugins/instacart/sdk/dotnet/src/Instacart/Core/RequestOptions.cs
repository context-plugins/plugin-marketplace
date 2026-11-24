using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Instacart.Core.Hooks;
using Instacart.Core.Models;

namespace Instacart.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
