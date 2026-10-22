import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorizationDetailsElement = {
  /**
   * The type of this element.
   *
   * From _"OAuth 2.0 Rich Authorization Requests"_: _"The type of authorization data as a string.
   * This field MAY define which other elements are allowed in the request. This element is
   * REQUIRED."_
   *
   * This property is always NOT `null`.
   */
  type: string;
  /**
   * The resources and/or resource servers. This property may be `null`.
   *
   * From _"OAuth 2.0 Rich Authorization Requests"_: _"An array of strings representing the location
   * of the resource or resource server. This is typically composed of URIs."_
   *
   * This property may be `null`.
   */
  locations?: string[];
  /**
   * The actions.
   *
   * From _"OAuth 2.0 Rich Authorization Requests"_: _"An array of strings representing the kinds of
   * actions to be taken at the resource. The values of the strings are determined by the API being
   * protected."_
   *
   * This property may be `null`.
   */
  actions?: string[];
  /**
   * From _"OAuth 2.0 Rich Authorization Requests"_: _"An array of strings representing the kinds of
   * data being requested from the resource."_
   *
   * This property may be `null`.
   */
  dataTypes?: string[];
  /**
   * The identifier of a specific resource. From _"OAuth 2.0 Rich Authorization Requests"_: _"A
   * string identifier indicating a specific resource available at the API."_
   *
   * This property may be `null`.
   */
  identifier?: string;
  /**
   * The types or levels of privilege. From "OAuth 2.0 Rich Authorization Requests": _"An array of
   * strings representing the types or levels of privilege being requested at the resource."_
   *
   * This property may be `null`.
   */
  privileges?: string[];
  /**
   * The RAR request in the JSON format excluding the pre-defined attributes such as `type` and
   * `locations`. The content and semantics are specific to the deployment and the use case
   * implemented.
   */
  otherFields?: string;
};

export const authorizationDetailsElementSchema: Schema<AuthorizationDetailsElement> =
  s.object<AuthorizationDetailsElement>({
    type: s.string(),
    locations: s.optional(s.array(s.string())),
    actions: s.optional(s.array(s.string())),
    dataTypes: s.optional(s.array(s.string())),
    identifier: s.optional(s.string()),
    privileges: s.optional(s.array(s.string())),
    otherFields: s.optional(s.string()),
  });
