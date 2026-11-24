"""Runtime plumbing.

Nothing here is part of the SDK's public surface: mostly the pure functions the raw client calls to
turn parameters into a URL, a header mapping, and form fields, plus the one base class the
subscripted factories share and one stateful object -- ``sse_parser``'s push parser, which is
incremental by nature because it is fed a chunk at a time. They are grouped under a private package
so this runtime's own ``__init__`` stays the whole of what generated code imports."""

__all__: list[str] = []
