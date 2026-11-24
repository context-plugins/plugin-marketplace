using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Apibara.Core.Hooks;
using Apibara.Core.Models;

namespace Apibara.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
