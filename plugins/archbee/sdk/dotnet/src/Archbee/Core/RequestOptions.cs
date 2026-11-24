using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Archbee.Core.Hooks;
using Archbee.Core.Models;

namespace Archbee.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
