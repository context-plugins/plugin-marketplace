using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Applike.Core.Hooks;
using Applike.Core.Models;

namespace Applike.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
