import composeAnything from './compose';
import sanitize from './sanitize';
import { deepFlatResMap } from './deepMap';
// this way, we can trust the inputs to composeAnything
export const assembleFactory_g_T = transformer => (opts) => {
  const fn = opts
  |> composeAnything
  |> deepFlatResMap;
  return data => data
  |> transformer
  |> fn;
};
export default (assembleFactory_g_T(sanitize)(false));
