using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ParallelSdk.Core.Webhooks.Signing;

internal abstract record MessageSegment
{
    internal abstract byte[] ToBytes(byte[] body, Func<string, string> resolveHeader);

    internal sealed record Literal(string Text) : MessageSegment
    {
        internal override byte[] ToBytes(byte[] body, Func<string, string> resolveHeader) =>
            Encoding.UTF8.GetBytes(Text);
    }

    internal sealed record RawBody : MessageSegment
    {
        internal override byte[] ToBytes(byte[] body, Func<string, string> resolveHeader) => body;
    }

    internal sealed record Header(string Name) : MessageSegment
    {
        internal override byte[] ToBytes(byte[] body, Func<string, string> resolveHeader) =>
            Encoding.UTF8.GetBytes(resolveHeader(Name));
    }
}

internal static class MessageSegmentExtensions
{
    extension(IReadOnlyList<MessageSegment> segments)
    {
        internal byte[] ToBytes(byte[] body, Func<string, string> resolveHeader) =>
            segments.SelectMany(segment => segment.ToBytes(body, resolveHeader)).ToArray();
    }
}
