using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Divvy.Core.Hooks;
using Divvy.Core.Models;

namespace Divvy.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
