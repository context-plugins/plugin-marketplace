"""What every subscripted factory shares: refusing to be called.

The fence itself is static and lives in each factory's *absence* of a ``__call__``; this module
carries only the message a caller sees when they trip it at runtime."""

from __future__ import annotations

from typing import TYPE_CHECKING


class SubscriptOnly:
    """A factory whose declared type is structurally mandatory.

    Fourteen factories across ``params``, ``bodies`` and ``decoding`` name their type in a subscript
    (ADR-0013). Thirteen of the fourteen declare no ``__call__`` a type checker can see, so omitting
    the subscript is an ``[operator]`` error at the call site -- that is the fence, and it is entirely
    static; ``decode_text`` is the exception, and the last paragraph says why. What this
    class carries is the *courtesy*: a runtime ``__call__``, invisible to the checker, turning
    Python's bare "object is not callable" into a message that names the right spelling.

    Subclasses supply the two facts the message is built from, as class attributes or as fields of
    their own. What a base may **not** share is a ``__getitem__``'s *return shape*: it depends on the
    subscripted type, and Python has no higher-kinded types, so no base can parametrise over it --
    the precision ADR-0013 exists for, the reason ``json_decoder[int]`` is rejected where
    ``ApiResult[str, ...]`` is declared. Two factories over the *same* shape may share a class and
    tell themselves apart by a field, because what they then differ in -- a body's format, say, or
    which adapter entry point reads an event's ``data`` -- carries no type at all. Only a shape
    does.

    ``decode_text`` is the one member of the family that does **not** inherit this: its bare call is
    the ``str`` default, so its ``__call__`` is real, typed, and meant to be reached."""

    # Empty rather than naming the two attributes below: a subclass supplies them either as class
    # attributes or as its own dataclass fields, and claiming them here would collide with the
    # latter. Without this line the ``slots=True`` the dataclass subclasses declare buys nothing --
    # a slotted class over an unslotted base still gets a ``__dict__`` per instance.
    __slots__ = ()

    factory_name: str
    """How the caller spells the factory -- ``json_decoder``, ``param``."""

    spelling: str
    """The correct form, with an example: ``param[T](key, value), e.g. param[bool]("array", True)``."""

    if not TYPE_CHECKING:

        def __call__(self, *args, **kwargs):
            raise TypeError(
                f"{self.factory_name} is not called -- name the declared type in its subscript: {self.spelling}"
            )
