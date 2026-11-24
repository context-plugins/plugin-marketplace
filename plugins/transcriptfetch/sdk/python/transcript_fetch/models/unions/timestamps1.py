from __future__ import annotations

from typing import TypeAlias

from ..enums.timestamps import TimestampsOrStr

Timestamps1: TypeAlias = bool | TimestampsOrStr
"""Which form the transcript comes back in. true (the default) returns the ``segments`` array, each with start, duration
and text (podcast episodes transcribed from audio may also carry a ``speaker`` id per segment - see the podcast notes).
false returns a single joined ``text`` string instead. On the single-transcript 200 exactly one of the two is present,
never both, since segments already contain every word the joined text does; job results and batch entries carry both
text and segments. The older strings "segment" and "none" mean the same two things and are still accepted."""

Timestamps1Dict: TypeAlias = bool | TimestampsOrStr
