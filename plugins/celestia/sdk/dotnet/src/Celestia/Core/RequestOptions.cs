using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Celestia.Core.Hooks;
using Celestia.Core.Models;

namespace Celestia.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
