using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AwsCertificateManager.Core.Hooks;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
