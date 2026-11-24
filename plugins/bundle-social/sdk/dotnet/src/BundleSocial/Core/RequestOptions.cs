using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using BundleSocial.Core.Hooks;
using BundleSocial.Core.Models;

namespace BundleSocial.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
