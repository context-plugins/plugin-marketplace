"""The base model every domain model subclasses, and the one domain model the runtime declares itself."""

from __future__ import annotations

import json
from collections.abc import Mapping
from types import MappingProxyType
from typing import TYPE_CHECKING, Any, Literal, NoReturn, Protocol, TypeVar

from pydantic import BaseModel, ConfigDict, model_validator
from typing_extensions import Self

from .optionality import strip_unset

ExtraItemT = TypeVar("ExtraItemT")
ExtraItemT_co = TypeVar("ExtraItemT_co", covariant=True)


class _ExtraItemsHolder(Protocol[ExtraItemT_co]):
    """A model seen only as the holder of its extras, which is how the two accessors below get their type.

    A model states the type of its additional properties once, in its own
    ``__pydantic_extra__: dict[str, T]`` annotation. Annotating ``self`` with this protocol lets a
    type checker solve ``T`` from that annotation, so one accessor on the base returns ``Note`` on a
    model whose extras are notes and ``Any`` on one that declares nothing -- pydantic's own
    ``dict[str, Any] | None``. ``Mapping`` rather than ``dict``, so the parameter is covariant."""

    @property
    def __pydantic_extra__(self) -> Mapping[str, ExtraItemT_co] | None: ...


class SdkBaseModel(BaseModel):
    """Base class for every domain model.

    Immutable (``frozen``), **preserves** unknown JSON fields rather than dropping
    them (``extra="allow"``), accepts either the Python field name or its wire alias
    on input, and serializes declared fields back under the wire alias. Attribute
    docstrings on fields are lifted into their schema ``description``.

    A field the server adds after this SDK was generated survives on the instance --
    readable via :attr:`additional_properties`, a subscript, or ``model_extra`` -- and is
    re-emitted under the key it arrived with, at every nesting level. Preservation is
    deliberately symmetric: an unknown key a caller supplies is likewise sent, so a model
    received from the server can be echoed back without silently discarding server-side
    state. See ``docs/designs/unknown-field-preservation.md``.

    That is the default, for a schema that says nothing about its additional properties or
    says ``true``. A generated model narrows it with pydantic's own two spellings, and nothing
    in this class changes: ``__pydantic_extra__: dict[str, T] = Field(init=False)`` where the
    schema gives the extras a type -- every extra is then validated as ``T``, and one that is
    not refuses the whole object -- and ``model_config = ConfigDict(extra="forbid")`` where it
    says ``false``. ADR-0075.

    ``frozen`` blocks rebinding an attribute; it does not deep-freeze values. The
    contents of a ``list``/``dict`` field remain mutable in place, and so does the
    ``model_extra`` mapping of a model whose extras are untyped. A model with typed
    extras extends :class:`SdkTypedExtrasModel`, which also freezes that mapping.

    :meth:`to_dict` and :meth:`to_json` are the ergonomic front door to serialization;
    ``model_dump``/``model_dump_json`` remain available for the full option set. See
    ``docs/designs/model-serialization-helpers.md``."""

    model_config = ConfigDict(
        frozen=True,
        extra="allow",
        validate_by_name=True,
        validate_by_alias=True,
        serialize_by_alias=True,
        use_attribute_docstrings=True,
    )

    @property
    def additional_properties(self: _ExtraItemsHolder[ExtraItemT]) -> Mapping[str, ExtraItemT]:
        """The keys this model does not declare, as a read-only mapping typed by the model itself.

        ``Mapping[str, T]`` on a model that annotates ``__pydantic_extra__: dict[str, T]``, and
        ``Mapping[str, Any]`` on one that does not; empty on a closed model. It holds the extras
        only -- a declared field is read as an attribute -- under the keys they arrived with, so a
        key that is not a Python name is read here.

        The view cannot be written through, and on a model with typed extras neither can the
        dict behind it, ``model_extra`` (:class:`SdkTypedExtrasModel`). An extra is set
        when the model is built.

        Returns:
            A read-only view of the model's additional properties."""
        return MappingProxyType(self.__pydantic_extra__ or {})

    def __getitem__(self: _ExtraItemsHolder[ExtraItemT], key: str, /) -> ExtraItemT:
        """Read one additional property by its wire key, typed as :attr:`additional_properties` is.

        A subscript and not an attribute, so it can never collide with a declared field and
        takes any key. Declared fields are not reachable here. It is a read of one extra and
        nothing more: ``in``, ``len`` and iteration are not part of it -- use
        :attr:`additional_properties` for those.

        Args:
            key: The key the extra arrived with.

        Returns:
            The extra's value.

        Raises:
            KeyError: If the model holds no extra under ``key``."""
        return (self.__pydantic_extra__ or {})[key]

    def to_dict(
        self,
        *,
        mode: Literal["json", "python"] = "json",
        by_alias: bool = True,
        exclude_unset: bool = False,
        exclude_defaults: bool = False,
        exclude_none: bool = False,
    ) -> dict[str, Any]:
        """Return this model as a dictionary in the shape the API exchanges.

        Defaults produce JSON-safe values under the wire alias of every field, so the
        result is ``json.dumps``-able, equals ``json.loads(self.to_json())``, and
        validates back into an equal model -- including through a discriminated-union
        alias. Unknown fields the server sent are included (see
        ``docs/designs/unknown-field-preservation.md``).

        This is a convenience wrapper over ``model_dump``; reach for that directly when
        you need the options this deliberately does not surface (``include``/``exclude``,
        ``context``, ``round_trip``, ``warnings``, ``serialize_as_any``, ``fallback``).

        A field typed ``OptionalNullable[...]`` (e.g. an omit-vs-null field) that the caller
        never touched is always omitted here, even though plain ``model_dump`` shows it as
        ``null`` -- this is the one documented exception to "exactly the underlying dump".
        See ``docs/designs/optional-nullable-fields.md``.

        Args:
            mode: ``"json"`` coerces values to JSON-safe types (``datetime`` becomes a
                string); ``"python"`` keeps the Python objects.
            by_alias: Emit each field under its wire alias rather than its Python name.
                The base config already serializes by alias, so this restates the
                contract; pass ``False`` for Python-name keys.
            exclude_unset: Omit fields that were never explicitly set, narrowing the
                output to what the server actually sent. **Opt-in, not the default**:
                a variant that pins its tag in its own schema carries it as a
                *defaulted* field, so on a locally constructed model this drops the tag
                and the result no longer validates against the union alias.
            exclude_defaults: Omit fields still holding their default value.
            exclude_none: Omit fields whose value is ``None``. The round-trip-safe way
                to suppress nulls -- it keeps defaulted discriminators.

        Returns:
            The model's fields keyed by wire alias, plus any unknown fields it preserved."""
        return strip_unset(
            self,
            self.model_dump(
                mode=mode,
                by_alias=by_alias,
                exclude_unset=exclude_unset,
                exclude_defaults=exclude_defaults,
                exclude_none=exclude_none,
            ),
        )

    def to_json(
        self,
        *,
        indent: int | None = 2,
        by_alias: bool = True,
        exclude_unset: bool = False,
        exclude_defaults: bool = False,
        exclude_none: bool = False,
    ) -> str:
        """Return this model as a JSON string in the shape the API exchanges.

        Indented by default for logs and debugging, and otherwise identical in content
        to :meth:`to_dict` -- ``json.loads(self.to_json()) == self.to_dict()``.

        This is a convenience wrapper over ``model_dump``/``model_dump_json``; reach for
        those directly when you need the options this deliberately does not surface
        (``include``/``exclude``, ``context``, ``round_trip``, ``warnings``,
        ``ensure_ascii``, ``serialize_as_any``, ``fallback``).

        Built on :meth:`to_dict` (rather than delegating to ``model_dump_json`` directly)
        so the pair can never drift apart -- including the ``OptionalNullable`` omission
        documented there.

        Args:
            indent: Spaces of indentation; ``None`` emits compact JSON.
            by_alias: Emit each field under its wire alias rather than its Python name.
            exclude_unset: Omit fields that were never explicitly set. Carries the same
                discriminator caveat as :meth:`to_dict`.
            exclude_defaults: Omit fields still holding their default value.
            exclude_none: Omit fields whose value is ``None``.

        Returns:
            The JSON text the API exchanges, indented unless ``indent`` is ``None``."""
        return json.dumps(
            self.to_dict(
                mode="json",
                by_alias=by_alias,
                exclude_unset=exclude_unset,
                exclude_defaults=exclude_defaults,
                exclude_none=exclude_none,
            ),
            indent=indent,
            ensure_ascii=False,
        )


class _ReadOnlyExtras(dict[str, Any]):
    """The extras dict of a model with typed extras, after validation: readable, never written.

    A ``dict`` and not a ``Mapping``, because pydantic-core serializes the extras only from a real
    dict. Every mutator raises, so a value can no longer reach the wire without being validated:
    ``model_extra[k] = v``, ``update``, ``|=`` and the rest, and ``model_copy(update=...)`` with a
    key that is not a declared field, which pydantic writes into this dict. Copies and pickles
    rebuild it through :meth:`__reduce__` rather than item by item, which would be a write."""

    def __setitem__(self, key: str, value: Any, /) -> NoReturn:
        _refuse_write()

    def __delitem__(self, key: str, /) -> NoReturn:
        _refuse_write()

    if not TYPE_CHECKING:
        # typeshed's dict pairs ``__ior__`` with ``__or__`` in a way no override satisfies, so the
        # refusal is runtime-only; mypy keeps dict's own signature.

        def __ior__(self, value, /):
            _refuse_write()

    def clear(self) -> NoReturn:
        _refuse_write()

    def pop(self, key: str, default: Any = None, /) -> NoReturn:
        _refuse_write()

    def popitem(self) -> NoReturn:
        _refuse_write()

    def setdefault(self, key: str, default: Any = None, /) -> NoReturn:
        _refuse_write()

    def update(self, *args: Any, **kwargs: Any) -> NoReturn:
        _refuse_write()

    def __reduce__(self) -> tuple[type[_ReadOnlyExtras], tuple[dict[str, Any]]]:
        return (type(self), (dict(self),))


def _refuse_write() -> NoReturn:
    raise TypeError("additional properties are read-only; build a new model to change them")


class SdkTypedExtrasModel(SdkBaseModel):
    """Base class for a model whose schema gives its additional properties a type.

    Everything :class:`SdkBaseModel` is, plus one guarantee: once the model is validated its extras
    are read-only, so a value never bypasses their declared type. The model itself still states
    that type, in its ``__pydantic_extra__: dict[str, T]`` annotation, and pydantic validates each
    extra on the way in. But pydantic leaves ``model_extra`` a plain dict, so a write into it --
    or ``model_copy(update=...)`` with an undeclared key -- would put an unchecked value on the
    wire. The after-validator here swaps that dict for a read-only one.

    A separate base, and not a validator on :class:`SdkBaseModel`, because an untyped bag accepts
    any value and has nothing to protect, and a validator there would cost every model a Python
    call per decode (ADR-0075)."""

    @model_validator(mode="after")
    def _freeze_additional_properties(self) -> Self:
        if self.__pydantic_extra__ is not None:
            object.__setattr__(self, "__pydantic_extra__", _ReadOnlyExtras(self.__pydantic_extra__))
        return self


class UnknownPayload(SdkBaseModel):
    """The body of a webhook event the SDK does not model: a type no case names, or a body no model accepts.

    A model declaring no field, so every key of the body is an extra: preserved as it arrived, readable through
    ``model_extra`` or by attribute, and re-emitted by :meth:`to_dict` / :meth:`to_json` under the key it came
    with. Decoded through the same adapter as every modelled event -- ``decode_json[UnknownPayload](body)`` --
    so a body that is not a JSON object is a ``ValidationError``, as it is for a model.

    A provider adds events after an SDK is generated. Such a delivery is a value to acknowledge, not a failure."""
